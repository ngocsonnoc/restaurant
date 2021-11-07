const IMAGES = require.context('../assets/img')
export function getImageFromPath(path){
    return IMAGES(path)
}