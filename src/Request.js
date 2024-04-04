const request = {
    requestPopular:`${import.meta.env.VITE_POPULAR_MOVIES}`,
    requestTopRated:`${import.meta.env.VITE_TOPRATED_MOVIES}`,
    requestTrending:`${import.meta.env.VITE_TRENDING}`,
    requestHorror:`${import.meta.env.VITE_HORROR}`,
    requestUpComing:`${import.meta.env.VITE_UPCOMING}`,
    requestACtion:`${import.meta.env.VITE_ACTION}`,
    requestThriller:`${import.meta.env.VITE_THRILLER}`,
}

export default request