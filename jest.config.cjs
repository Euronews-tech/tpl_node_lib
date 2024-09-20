/** @type {import('jest').Config} */
const config = {
    verbose: true,
    reporters: [
        ['github-actions', { silent: false }],
        [
            'jest-junit',
            {
                outputName: 'junit.xml',
            },
        ],
        'summary',
        'default',
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
}

module.exports = config
