(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function(root, n) {
        return Math.pow(n, 1/root);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'the %n th root of %n', 'root'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My Test Extension', descriptor, ext);
})({});
