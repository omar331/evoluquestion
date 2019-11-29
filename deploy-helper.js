var _ = require('lodash');
var Shipit = require('shipit-cli');
var chalk = require('chalk');

let deployServers = {}

/**
 * Configurações padrão para deploy
 *
 */
var shipitConfigs = {
    default: {
        workspace: '/tmp/deploy-workdir',
        repositoryUrl: '/opt/front-dev',
        ignores: ['.git', 'node_modules'],
        rsync: ['--del'],
        keepReleases: 5,
        shallowClone: true,
        dirToCopy: 'to/be/defined',
        deployTo: '/to/be/defined'
    }
};


/**
 * Inicializa as configurações dos servidores para deploy
 *
 * @param serverConfigs
 */
function setDeployServers( deployServersConfigs ) {
    // Ajusta as chaves de deploy
    for( let server in deployServersConfigs ) {
        if ( server == 'prodLocal' ) continue

        let serverConfig = deployServersConfigs[server]

        /* A chave (key) deve buscada na pasta de chaves */
        if ( serverConfig.hasOwnProperty('key') ) {
            deployServersConfigs[server]['key'] = '/opt/ssh-keys/' + deployServersConfigs[server]['key']
        }
    }

    shipitConfigs = _.merge(shipitConfigs, deployServersConfigs )
}


/**
 * Realiza o deploy de uma certa aplicação para um certo servidor
 *
 * @param app
 * @param deployServer
 * @param options
 */
function deploy( app, deployServer, options = {} ) {
    shipitConfigs[ deployServer ]['dirToCopy'] = 'apps/' + app + '/dist'
    shipitConfigs[ deployServer ]['deployTo'] = shipitConfigs[ deployServer ]['deployTo'] + '/' + app

    var shipit = new Shipit({environment: deployServer});
    require('shipit-deploy')(shipit);


    shipit.initConfig(shipitConfigs);


    // Initialize shipit.
    shipit.initialize();

    shipit.log(chalk.green('Inicializando deploy'));

    return Promise.all([
        new Promise( (resolve, reject) => {
            shipit.log( chalk.green('Iniciando deploy app ' + app + ' para o servidor ' + deployServer ) )

            // Run tasks.
            shipit.start([
                'deploy:init',
                'deploy:fetch',
                'deploy:update',
                'deploy:publish',
                'deploy:clean',
                'deploy:finish'
            ])
            .on('deployed',
                () => {
                    shipit.log( chalk.green('Deploy concluído') )
                    resolve()
                }
            )
        })
    ])
}

exports.setDeployServers = setDeployServers
exports.deploy = deploy
