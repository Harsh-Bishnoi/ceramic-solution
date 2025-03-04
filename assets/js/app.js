// navbar
const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate-42")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates-2").classList.toggle("rotate-43")
    document.body.classList.toggle("overflow-hidden")
}




//  What we do
const cardsData = [
    {
        img: "./assets/images/png/section-2-img-1.png",
        title: "Kitchen Backsplash",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: `<svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.61914C1.08579 5.61914 0.75 5.95493 0.75 6.36914C0.75 6.78335 1.08579 7.11914 1.5 7.11914V5.61914ZM26.0303 6.89947C26.3232 6.60658 26.3232 6.1317 26.0303 5.83881L21.2574 1.06584C20.9645 0.772946 20.4896 0.772946 20.1967 1.06584C19.9038 1.35873 19.9038 1.83361 20.1967 2.1265L24.4393 6.36914L20.1967 10.6118C19.9038 10.9047 19.9038 11.3795 20.1967 11.6724C20.4896 11.9653 20.9645 11.9653 21.2574 11.6724L26.0303 6.89947ZM1.5 7.11914H25.5V5.61914H1.5V7.11914Z" fill="#FF0000"/>
</svg>
`,
    },
    {
        img: "./assets/images/png/section-2-img-2.png",
        title: "Custom Showers",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: `<svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.61914C1.08579 5.61914 0.75 5.95493 0.75 6.36914C0.75 6.78335 1.08579 7.11914 1.5 7.11914V5.61914ZM26.0303 6.89947C26.3232 6.60658 26.3232 6.1317 26.0303 5.83881L21.2574 1.06584C20.9645 0.772946 20.4896 0.772946 20.1967 1.06584C19.9038 1.35873 19.9038 1.83361 20.1967 2.1265L24.4393 6.36914L20.1967 10.6118C19.9038 10.9047 19.9038 11.3795 20.1967 11.6724C20.4896 11.9653 20.9645 11.9653 21.2574 11.6724L26.0303 6.89947ZM1.5 7.11914H25.5V5.61914H1.5V7.11914Z" fill="#FF0000"/>
</svg>
`,
    },
    {
        img: "./assets/images/png/section-2-img-3.png",
        title: "Custom Flooring",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: `<svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.61914C1.08579 5.61914 0.75 5.95493 0.75 6.36914C0.75 6.78335 1.08579 7.11914 1.5 7.11914V5.61914ZM26.0303 6.89947C26.3232 6.60658 26.3232 6.1317 26.0303 5.83881L21.2574 1.06584C20.9645 0.772946 20.4896 0.772946 20.1967 1.06584C19.9038 1.35873 19.9038 1.83361 20.1967 2.1265L24.4393 6.36914L20.1967 10.6118C19.9038 10.9047 19.9038 11.3795 20.1967 11.6724C20.4896 11.9653 20.9645 11.9653 21.2574 11.6724L26.0303 6.89947ZM1.5 7.11914H25.5V5.61914H1.5V7.11914Z" fill="#FF0000"/>
</svg>
`,
    },
    {
        img: "./assets/images/png/section-2-img-4.png",
        title: "Large Format Tiling",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: `<svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.61914C1.08579 5.61914 0.75 5.95493 0.75 6.36914C0.75 6.78335 1.08579 7.11914 1.5 7.11914V5.61914ZM26.0303 6.89947C26.3232 6.60658 26.3232 6.1317 26.0303 5.83881L21.2574 1.06584C20.9645 0.772946 20.4896 0.772946 20.1967 1.06584C19.9038 1.35873 19.9038 1.83361 20.1967 2.1265L24.4393 6.36914L20.1967 10.6118C19.9038 10.9047 19.9038 11.3795 20.1967 11.6724C20.4896 11.9653 20.9645 11.9653 21.2574 11.6724L26.0303 6.89947ZM1.5 7.11914H25.5V5.61914H1.5V7.11914Z" fill="#FF0000"/>
</svg>
`,
    },
    {
        img: "./assets/images/png/section-2-img-5.png",
        title: "Wall Tiling",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: `<svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.61914C1.08579 5.61914 0.75 5.95493 0.75 6.36914C0.75 6.78335 1.08579 7.11914 1.5 7.11914V5.61914ZM26.0303 6.89947C26.3232 6.60658 26.3232 6.1317 26.0303 5.83881L21.2574 1.06584C20.9645 0.772946 20.4896 0.772946 20.1967 1.06584C19.9038 1.35873 19.9038 1.83361 20.1967 2.1265L24.4393 6.36914L20.1967 10.6118C19.9038 10.9047 19.9038 11.3795 20.1967 11.6724C20.4896 11.9653 20.9645 11.9653 21.2574 11.6724L26.0303 6.89947ZM1.5 7.11914H25.5V5.61914H1.5V7.11914Z" fill="#FF0000"/>
</svg>
`,
    },
    {
        img: "./assets/images/png/section-2-img-6.png",
        title: "ADA Compliant Showers",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: `<svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.61914C1.08579 5.61914 0.75 5.95493 0.75 6.36914C0.75 6.78335 1.08579 7.11914 1.5 7.11914V5.61914ZM26.0303 6.89947C26.3232 6.60658 26.3232 6.1317 26.0303 5.83881L21.2574 1.06584C20.9645 0.772946 20.4896 0.772946 20.1967 1.06584C19.9038 1.35873 19.9038 1.83361 20.1967 2.1265L24.4393 6.36914L20.1967 10.6118C19.9038 10.9047 19.9038 11.3795 20.1967 11.6724C20.4896 11.9653 20.9645 11.9653 21.2574 11.6724L26.0303 6.89947ZM1.5 7.11914H25.5V5.61914H1.5V7.11914Z" fill="#FF0000"/>
</svg>
`,
    },
    {
        img: "./assets/images/png/section-2-img-5.png",
        title: "Fireplace Tiling",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: `<svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.61914C1.08579 5.61914 0.75 5.95493 0.75 6.36914C0.75 6.78335 1.08579 7.11914 1.5 7.11914V5.61914ZM26.0303 6.89947C26.3232 6.60658 26.3232 6.1317 26.0303 5.83881L21.2574 1.06584C20.9645 0.772946 20.4896 0.772946 20.1967 1.06584C19.9038 1.35873 19.9038 1.83361 20.1967 2.1265L24.4393 6.36914L20.1967 10.6118C19.9038 10.9047 19.9038 11.3795 20.1967 11.6724C20.4896 11.9653 20.9645 11.9653 21.2574 11.6724L26.0303 6.89947ZM1.5 7.11914H25.5V5.61914H1.5V7.11914Z" fill="#FF0000"/>
</svg>
`,
    },

];

const container = document.getElementById("cardsContainer");

container.innerHTML = cardsData.map(card => `
            <div class="col-12 col-lg-4 col-sm-6 mb-4 d-flex justify-content-center">
                    <div class="img-card w-100">
                        <img class="w-100 border-radius-12 mb-4" src="${card.img}" alt="img">
                        <h3 class="font-family-primary fw-semibold fs-4 lh-38 text-black mb-12">${card.title}</h3>
                        <p class="font-family-primary fw-normal fs-6 lh-25 text-black mb-4">${card.description}</p>
                        <div class="d-flex align-items-center gap-10">
                           <h6 class="font-family-primary fw-semibold fs-6 lh-25 color-red mb-0">${card.text}</h6>
                           <div class="">${card.svg}</div>
                        </div>
                    </div>
            </div>
        `).join('');