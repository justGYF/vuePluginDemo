/**
 * Created by ylf on 2017/4/10.
 */
var salad = require('postcss-salad')
module.exports = {
    plugins: [
        salad({
            browser: ['ie > 9', 'last 20 version'],
            features: {
                'bem': {
                    'shortcuts': {
                        'component': 'b',
                        'modifier': 'm',
                        'descendent': 'e'
                    },
                    'separators': {
                        'descendent': '__',
                        'modifier': '--'
                    }
                }
            }
        })
    ]
}
