import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="GooglePlacesAutocomplete334"
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      onFail={(err) => console.log(err)}
      onNotFound={() => console.log('notfound')}
      onTimeout={() => console.log('onTimeout')}
      enablePoweredByContainer={false}
      query={{
        key: 'Google api key needs',
        language: 'en',
      }}
      styles={{
        textInputContainer: {
          backgroundColor: 'blue',
          flexDirection: 'row',
          flex: 0,
          width: '90%',
        },
        textInput: {
          height: 38,
          flexDirection: 'row',
          backgroundColor: 'red',
          width: '70%',
          color: 'yellow',
          fontSize: 16,
          flex: 0, // перебили default
        },
        predefinedPlacesDescription: {
          color: 'green',
        },
      }}
    />
  );
};
