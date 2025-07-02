import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const HeaderDisplay = () => {

    const imagesData = [
        "https://images.unsplash.com/photo-1597983073540-684a10b15ab1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Fsd2FyJTIwc3VpdHxlbnwwfDB8MHx8fDA%3D",
        "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/with-hat-and-handbag-david-mccracken.jpg",
        "https://www.google.com/imgres?q=jewellery%20hd&imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F02%2F92%2F45%2F45%2F360_F_292454520_pZBsOK30w2erTPcAtXbNtFLJk0kAZ3vE.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dindian%2Bjewellery&docid=Mwqh5Nc_eKc8dM&tbnid=UoCEKfMgkZS1HM&vet=12ahUKEwj0neXM29WNAxXUha8BHa_iIW8QM3oECBoQAA..i&w=540&h=360&hcb=2&ved=2ahUKEwj0neXM29WNAxXUha8BHa_iIW8QM3oECBoQAA",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wholesalecatalog.in%2Fportfolio%2Famirah-maariyah-catalog-buy-ladies-suits-designer-salwar-suits-for-women-online%2F&psig=AOvVaw1uM29Dy6JkEEx3bKcpv1JY&ust=1749056339463000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj6xuLc1Y0DFQAAAAAdAAAAABAE",

    ];

    return (
        <Carousel className="my-10 mx-auto w-[93vw] overflow-x-clip sm:overflow-visible">
            <CarouselContent>

                {
                    imagesData.map((image) => (
                        <CarouselItem key={image}>
                            <img
                                src={image}
                                loading="lazy"
                                className="object-cover w-full h-[68vh] rounded-3xl"
                            />
                        </CarouselItem>
                    ))
                }

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default HeaderDisplay