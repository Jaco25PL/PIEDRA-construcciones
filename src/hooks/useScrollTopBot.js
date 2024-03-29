
const useScrollToTopBot = () => {

    const scrollTo = ( to ) => {
    
        if(to === "top"){
          window.scrollTo({ top: 0, behavior: 'smooth' })
        
        }else if(to === "bottom"){
          const height = document.documentElement.scrollHeight
          window.scrollTo({top: height, behavior: 'smooth'})
        }
      }

      return scrollTo

}

export default useScrollToTopBot