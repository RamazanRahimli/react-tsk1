import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Photo from '../../assets/images/about/Frame 48096188.png';
import '../OurServices/carousel.css';

function OurTeam() {
    const komandamiz = [
        {
            name: 'Aslan',
            job: 'Ceo',
            title: 'gasanov',
            number: '1',
            img: Photo,
        },
        {
            name: 'Aslan',
            job: 'Ceo',
            title: 'gasanov',
            number: '2',
            img: Photo,
        },
        {
            name: 'Aslan',
            job: 'Ceo',
            title: 'gasanov',
            number: '3',
            img: Photo,
        },
        {
            name: 'Aslan',
            job: 'Ceo',
            title: 'gasanov',
            number: '4',
            img: Photo,
        },
        {
            name: 'Aslan',
            job: 'Ceo',
            title: 'gasanov',
            number: '5',
            img: Photo,
        },
        {
            name: 'Aslan',
            img: Photo,
            job: 'Ceo',
            title: 'gasanov',
            number: '6'
        },
        {
            name: 'Aslan',
            job: 'Ceo',
            img: Photo,
            title: 'gasanov',
            number: '7'
        },


    ];

    const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(calculateSlidesToShow());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function calculateSlidesToShow() {
        const screenWidth = window.innerWidth;
        const maxSlides = komandamiz.length;

        let calculatedSlidesToShow;
        if (screenWidth >= 1200) {
            calculatedSlidesToShow = 4;
        } else if (screenWidth >= 992) {
            calculatedSlidesToShow = 3;
        } else if (screenWidth >= 768) {
            calculatedSlidesToShow = 2;
        } else {
            calculatedSlidesToShow = 1;
        }

        return Math.min(calculatedSlidesToShow, maxSlides);
    }

    const settings = {
        slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
    };

    return (
        <div className="ourTeam">
            <h2 style={{ marginBottom: '30px' }}>BIZIM KOMANDA</h2>
            <Slider {...settings}>
                {komandamiz.map((item) => (
                    <div className="cardBox" key={item.number}>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="cardImg">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="cardText">
                            <h4 style={{ paddingTop: '20px', fontWeight: '600', fontSize: '20px' }}>{item.name}</h4>
                            <p>{item.job}</p>
                            <p>{item.number}</p>
                            <p>{item.number}</p>
                            <p>{item.number}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default OurTeam;