import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import useSensors, { SensorData, BarometerData } from './hooks/useSensors';

const App = () => {
  const {
    accelerometerState,
    gyroscopeState,
    magnetometerState,
    barometerState,
  } = useSensors();

  const renderSensorStatus = (
    title: string,
    status?: SensorData | BarometerData,
  ) => {
    if (!status) return null;

    return (
      <View style={styles.content}>
        <Text style={styles.sensorType}>{title}</Text>
        {Object.keys(status).map((statusKey: string) => {
          return (
            <View style={{ flexDirection: 'row' }} key={statusKey}>
              <Text style={styles.contentTitle}>{statusKey} : </Text>
              <Text style={styles.contentValue}>{status[statusKey]}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone Sensor Logs:</Text>
      {renderSensorStatus('Accelerometer', accelerometerState)}
      {renderSensorStatus('Gyroscope', gyroscopeState)}
      {renderSensorStatus('Magnetometer', magnetometerState)}
      {renderSensorStatus('Barometer', barometerState)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 32,
    marginBottom: 32,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#0ea0f5',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'column',
    paddingVertical: 4,
  },
  sensorType: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentValue: {
    fontSize: 18,
  },
});

export default App;
