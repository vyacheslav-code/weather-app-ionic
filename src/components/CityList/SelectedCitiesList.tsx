import React from "react";
import {
  IonList,
  IonItemSliding,
  IonItem,
  IonCard,
  IonCardTitle,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import useCities from "../../hooks/useCities";
import useCitySelectionStore from "../../store/citySelection";
import useSettingsStore from "../../store/settings";
import { convertCelsiusToFahrenheit } from "../../utils";

const SelectedCitiesList: React.FC = () => {
  const { displayUnits } = useSettingsStore();
  const { selection, removeCity } = useCitySelectionStore();
  const cities = useCities();
  const selectedCities = cities.filter((city) => selection.includes(city.id));

  return (
    <IonList>
      {selectedCities.map((city, idx) => (
        <IonItemSliding key={city.id}>
          <IonItem routerLink={`/gallery/${idx}`}>
            <IonCard>
              <IonCardTitle>
                {city.name}{" "}
                {displayUnits === "celcius"
                  ? city.temperature + " °C"
                  : convertCelsiusToFahrenheit(city.temperature) + " °F"}
              </IonCardTitle>
            </IonCard>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="danger" onClick={() => removeCity(city.id)}>
              Delete
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default SelectedCitiesList;
