const displayObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const displayImage = entry.target.querySelector(
      ".content__display-image-box"
    )
    const displayText = entry.target.querySelector(".content__display-text-box")

    if (entry.isIntersecting) {
      displayImage.classList.add("content__display-image-box--animated")
      displayText.classList.add("content__display-text-box--animated")
      return
    }

    displayImage.classList.remove("content__display-image-box--animated")
    displayText.classList.remove("content__display-text-box--animated")
  })
})

const galleryObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const galleryHeading = entry.target.querySelector(
      ".content__gallery-heading"
    )

    const galleryGrids = entry.target.querySelector(".content__gallery-grids")
    if (entry.isIntersecting) {
      galleryHeading.classList.add("content__gallery-heading--animated")
      galleryGrids.classList.add("content__gallery-grids--animated")
      return
    }

    galleryHeading.classList.remove("content__gallery-heading--animated")
    galleryGrids.classList.remove("content__gallery-grids--animated")
  })
})

displayObserver.observe(document.querySelector(".content__display"))
galleryObserver.observe(document.querySelector(".content__gallery"))

const mobileNav = document.querySelector(".mobile")
const openNav = document.querySelector(".hero__hamburger")
const closeNav = document.querySelector(".mobile__close")

openNav.addEventListener("click", () => {
  mobileNav.style.display = "inline-block"
  mobileNav.classList.add("mobile--animated-open")
  document.body.style.overflow = "hidden"
})

closeNav.addEventListener("click", () => {
  mobileNav.classList.add("mobile--animated-close")
  mobileNav.addEventListener(
    "animationend",
    () => {
      mobileNav.style.display = "none"
      mobileNav.classList.remove("mobile--animated-open")
      mobileNav.classList.remove("mobile--animated-close")
      document.body.style.overflow = "scroll"
    },
    { once: true }
  )
})
