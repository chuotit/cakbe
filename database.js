module.exports = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'avsyrreu_cakdb'),
            user: env('DATABASE_USERNAME', 'avsyrreu_root'),
            password: env('DATABASE_PASSWORD', 'vp72k5RQHSUSevc'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
