export default {
    baseL: '',
    root: 'src',
    build: {
        outDir: 'build',
        minify: true,
    },
    server: {
        watch: {
            include: ['src/**/*.js', 'src/*.html', 'src/**/*.scss'],
        }
    }
}