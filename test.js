#!/usr/bin/env node

const { initializeImageGenerator, generateImages, shutdown } = require('./generate');

const testItems = {
    'ak-12 mag': {
  	    id: '5bed61680db834001d2c45ab',
        hash: 129279493,
        type: 'mag'
    },
    'sr1mp mag': {
  	    id: '59f99a7d86f7745b134aa97b',
        hash: -1157986124,
        type: 'mag'
    },
    'stanag': {
        id: '55d4887d4bdc2d962f8b4570',
        hash: -304995614,
        type: 'mag'
    },
    'gpnvg': {
        id: '5c0558060db834001b735271',
        hash: 1444116773,
        type: 'nvg'
    },
    'as val': {
        id: '57c44b372459772d2b39b8ce',
        hash: 658560108,
        type: 'weapon'
    },
    'makarov': {
        id: '5448bd6b4bdc2dfc2f8b4569',
        hash: 430064332,
        type: 'weapon'
    },
    'aks74u': {
        id: '57dc2fa62459775949412633',
        hash: 592229284,
        type: 'weapon'
    },
    'mandible': {
        id: '5a16ba61fcdbcb098008728a',
        hash: -1874291613,
        type: 'ArmoredEquipment'
    },
    'fast_visor': {
        id: '5a16b672fcdbcb001912fa83',
        hash: -692958207,
        type: 'ArmoredEquipment'
    },
    'trooper_mask': {
        id: '5ea058e01dbce517f324b3e2',
        hash: 1311197229,
        type: 'ArmoredEquipment'
    },
    'firefighter_visor_down': {
        id: '5c08f87c0db8340019124324',
        hash: -235525326,
        type: 'helmet'
    },
    'dvl_stock': {
        id: '58889d0c2459775bc215d981',
        hash: 335400172,
        type: 'mod'
    },
    'djeta_visor_up': {
        id: '5c0d2727d174af02a012cf58',
        hash: 385484745,
        type: 'helmet'
    },
    'djeta_visor_down': {
        id: '5c0d2727d174af02a012cf58',
        hash: 385484742,
        type: 'helmet'
    },
    'killa_faceshield': {
        id: '5c0e842486f77443a74d2976',
        hash: 385484742,
        type: 'ArmoredEquipment'
    },
    't7': {
        id: '5c110624d174af029e69734c',
        hash: -1236854413,
        type: 'ThermalVision'
    }
};

(async () => {
    let targetItemId = false;
    let forceImage = false;
    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i];
        if (arg == '-id') {
            if (process.argv.length > i+1) {
                targetItemId = process.argv[i+1];
            }
        } else if (arg == '-img' || arg == '-image') {
            if (process.argv.length > i+1) {
                forceImage = process.argv[i+1];
            }
        }
    }
    if (!targetItemId && process.argv[2] && process.argv[2].length == 24) {
        targetItemId = process.argv[2];
    }
    if (!forceImage && process.argv[3] && !isNaN(process.argv[3].length)) {
        forceImage = process.argv[3];
    }
    try {
        const testItem = testItems.t7;
        console.log(testItem.hash);
        const hash = await initializeImageGenerator({haltOnHash: testItem.id});
        //await generateImages({targetItemId: targetItemId, forceImageIndex: forceImage});
    } catch (error) {
        console.log(error);
    }
    shutdown();
})();
