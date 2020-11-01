import React from 'react';
import { View, Text } from 'react-native';

import useSensors from './hooks/useSensors';

const App = () => {
  const {
    accelerometerState,
    gyroscopeState,
    magnetometerState,
    barometerState,
  } = useSensors();

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Phone Sensor Logs:
      </Text>
      <Text style={{ fontSize: 12 }}>
        Accelerometer: {JSON.stringify(accelerometerState)}
      </Text>
      <Text style={{ fontSize: 12 }}>
        Gyroscope: {JSON.stringify(gyroscopeState)}
      </Text>
      <Text style={{ fontSize: 12 }}>
        Magnetometer: {JSON.stringify(magnetometerState)}
      </Text>
      <Text style={{ fontSize: 12 }}>
        Barometer: {JSON.stringify(barometerState)}
      </Text>
    </View>
  );
};

export default App;
