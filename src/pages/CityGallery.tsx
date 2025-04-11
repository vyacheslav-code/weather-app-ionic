import React, { useRef } from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonButton,
  useIonViewDidEnter,
} from "@ionic/react";
import { useParams, useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import { list } from "ionicons/icons";
import "./CityGallery.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useCitySelectionStore from "../store/citySelection";

import { CityData } from "../components/CityGallery";

interface CityGalleryParams {
  initialIndex: string;
}

const CityGallery: React.FC = () => {
  const { initialIndex } = useParams<CityGalleryParams>();
  const history = useHistory();
  const swiperRef = useRef<SwiperClass | null>(null);
  const { selection } = useCitySelectionStore();

  useIonViewDidEnter(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(parseInt(initialIndex), 0);
    }
  });

  const handleBackToList = () => {
    history.goBack();
  };

  return (
    <IonPage className="gallery-page">
      <IonContent fullscreen>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          initialSlide={parseInt(initialIndex)}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          navigation={true}
          className="city-swiper"
        >
          {selection.map((cityId) => {
            return (
              <SwiperSlide key="cityId" className="city-slide">
                <CityData cityId={cityId} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="list-button-container">
          <IonButton
            className="list-button"
            fill="clear"
            onClick={handleBackToList}
          >
            <IonIcon icon={list} />
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CityGallery;
