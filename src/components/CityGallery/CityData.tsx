import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import {
  getEmojiByState,
  getUVIndexCategory,
  getWindDirectionText,
  getTemperatureDisplayValue,
} from "../../utils";
import {
  water,
  speedometer,
  eyeOutline,
  thermometerOutline,
  sunnyOutline,
  navigateOutline,
} from "ionicons/icons";
import useSettingsStore from "../../store/settings";
import "./CityData.css";
import useCity from "../../hooks/useCity";

interface CityDataProps {
  cityId: number;
}

const CityData: React.FC<CityDataProps> = ({ cityId }) => {
  const city = useCity(cityId);
  const { displayUnits } = useSettingsStore();
  if (!city) return null;
  const weatherEmoji = getEmojiByState(city.state);
  const temperature = getTemperatureDisplayValue(
    city.temperature,
    displayUnits,
  );
  const feelsLike = getTemperatureDisplayValue(city.feelsLike, displayUnits);

  return (
    <div className="city-data">
      <div className="city-slide-header">
        <h1>{city.name}</h1>
      </div>
      <IonCard className="weather-summary-card">
        <IonCardHeader>
          <IonCardSubtitle>Current Weather</IonCardSubtitle>
          <IonCardTitle className="weather-title">
            <span className="weather-emoji">{weatherEmoji}</span>
            {temperature}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <div className="feels-like">Feels like {feelsLike}</div>
        </IonCardContent>
      </IonCard>

      <IonGrid className="weather-grid">
        <IonRow>
          <IonCol size="6">
            <IonCard className="detail-card">
              <IonCardContent>
                <IonIcon icon={water} className="detail-icon" />
                <div className="detail-value">{city.humidity}%</div>
                <div className="detail-label">Humidity</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard className="detail-card">
              <IonCardContent>
                <IonIcon icon={sunnyOutline} className="detail-icon" />
                <div className="detail-value">{city.uvIndex}</div>
                <div className="detail-label">
                  UV Index - {getUVIndexCategory(city.uvIndex)}
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonList lines="full" className="detail-list">
        <IonItem>
          <IonIcon icon={navigateOutline} slot="start" />
          <IonLabel>
            <h2>Wind</h2>
            <p>
              {city.windSpeed} km/h, {getWindDirectionText(city.windDirection)}
            </p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={speedometer} slot="start" />
          <IonLabel>
            <h2>Pressure</h2>
            <p>{city.pressure} hPa</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={eyeOutline} slot="start" />
          <IonLabel>
            <h2>Visibility</h2>
            <p>{city.visibility} km</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={thermometerOutline} slot="start" />
          <IonLabel>
            <h2>Feels Like</h2>
            <p>{feelsLike}</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </div>
  );
};

export default CityData;
