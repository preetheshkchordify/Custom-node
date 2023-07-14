module.exports = function(RED) {
    function OrderNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.context().flow.set('name', config.name || '');
        node.context().flow.set('age', config.age || '');
        node.context().flow.set('email', config.email || '');

        node.on('input', function(msg) {
            var name = node.context().flow.get('name');
            var age = node.context().flow.get('age');
            var email = node.context().flow.get('email');

            var newMsg = {
                payload: {
                    name: name,
                    age: age,
                    email: email
                }
            };

            node.send(newMsg);
        });
    }

    RED.nodes.registerType('order', OrderNode);
};
