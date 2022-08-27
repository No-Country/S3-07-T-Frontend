// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./SliderTags.css"

// import required modules
import { Pagination, Navigation } from "swiper"
import styled from "styled-components"
import { images } from "../../utils/images/images"


const CardTagStyled = styled.div`
  width: 80px;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  & > img {
    object-fit: contain;
    padding: 10px;
    background-color: #2F3142;
    border-radius: 50%;
    max-width: 100%;
    height: 80px;
  }

  & > h2 {
    margin: 0;
    padding: 0;
    font-size: 15px;
    background: linear-gradient(to bottom, #9C7EEA 0%, #00C981 50%, #9C7EEA 80%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

function CardTag ({title, img}) {
  return (
    <CardTagStyled>
      <img src={img || images.ncLogo} alt={"imagen" + title} />
      <h2>{title}</h2>
    </CardTagStyled>
  )
}


export default function SliderTags({tags}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          tags.map((tag, index)=>{
            return(
              <SwiperSlide key={tag._id ||index} styles={{heigth:"100%", width:"100%"}}>
                <CardTag title={`${tag.title}`} img={tag.image}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
}
