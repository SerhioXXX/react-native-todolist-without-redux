import React, { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const GooglePlacesInputWithRef = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('New York');
  }, []);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder="GooglePlacesInputWithRef"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'Google api key needs',
        language: 'en',
      }}
      styles={{
        textInputContainer: {
          backgroundColor: 'red',
        },
        textInput: {
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: 'red',
        },
      }}
    />
  );
};
