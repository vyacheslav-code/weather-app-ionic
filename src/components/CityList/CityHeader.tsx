import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonPopover,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { ellipsisHorizontal, checkmark } from "ionicons/icons";
import useSettingsStore from "../../store/settings";

const CityHeader: React.FC = () => {
  const { displayUnits, setDisplayUnits } = useSettingsStore();
  const [popoverState, setShowPopover] = React.useState<{
    showPopover: boolean;
    event?: React.MouseEvent<HTMLIonButtonElement>;
  }>({
    showPopover: false,
    event: undefined,
  });

  const closePopover = () => {
    setShowPopover({ showPopover: false, event: undefined });
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Weather</IonTitle>
        <IonButton
          slot="end"
          shape="round"
          fill="clear"
          className="toolbar-icon"
          onClick={(e) => {
            e.persist();
            setShowPopover({ showPopover: true, event: e });
          }}
        >
          <IonIcon slot="icon-only" icon={ellipsisHorizontal} />
        </IonButton>
        <IonPopover
          isOpen={popoverState.showPopover}
          event={popoverState.event}
          onDidDismiss={closePopover}
          arrow={false}
          mode="ios"
          className="menu-popover"
        >
          <IonList>
            <IonItem
              onClick={() => {
                setDisplayUnits("celcius");
                closePopover();
              }}
            >
              {displayUnits === "celcius" && (
                <IonIcon slot="end" icon={checkmark} className="toolbar-icon" />
              )}
              <IonLabel>Display in °C</IonLabel>
            </IonItem>
            <IonItem
              onClick={() => {
                setDisplayUnits("fahrenheit");
                closePopover();
              }}
            >
              {displayUnits === "fahrenheit" && (
                <IonIcon slot="end" icon={checkmark} className="toolbar-icon" />
              )}
              <IonLabel>Display in °F</IonLabel>
            </IonItem>
          </IonList>
        </IonPopover>
      </IonToolbar>
    </IonHeader>
  );
};

export default CityHeader;
