module.exports = {
  plugins: {
    "postcss-nesting": true,       /* Nesting CSS */
    "autoprefixer": true, 
    "postcss-preset-env": {
      "stage": 3,
      "features": {
        "nesting-rules": true
      }
    }
  }
}