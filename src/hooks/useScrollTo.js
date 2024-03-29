

const useScrollTo = (aboutRef, servicesRef, projectsRef, fromRef) => {

    const scrollToSection = (ref) => {
      if (ref.current) {
        const navbarHeight = 90
        const offset = ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight
        window.scrollTo({ top: offset, behavior: "smooth" })
      }
    }
    
    const scrollToAbout = () => scrollToSection(aboutRef)
    const scrollToServices = () => scrollToSection(servicesRef)
    const scrollToProjects = () => scrollToSection(projectsRef)
    const scrollToForm = () => scrollToSection(fromRef)
    
    return {
        scrollToAbout,
        scrollToServices,
        scrollToProjects,
        scrollToForm
    }

}

export default useScrollTo