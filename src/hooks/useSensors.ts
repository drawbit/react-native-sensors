import { useState, useEffect } from 'react';
import {
  accelerometer,
  gyroscope,
  magnetometer,
  barometer,
  SensorData,
  BarometerData,
} from 'react-native-sensors';

const useSensors = () => {
  const [accelerometerState, setAccelerometerState] = useState<SensorData>();
  const [gyroscopeState, setGyroscopeState] = useState<SensorData>();
  const [magnetometerState, setMagnetometerState] = useState<SensorData>();
  const [barometerState, setBarometerState] = useState<BarometerData>();

  useEffect(() => {
    const accelerometerSubscription = accelerometer.subscribe({
      next({ x, y, z, timestamp }) {
        setAccelerometerState({ x, y, z, timestamp });
      },
    });
    const gyroscopeSubscription = gyroscope.subscribe({
      next({ x, y, z, timestamp }) {
        setGyroscopeState({ x, y, z, timestamp });
      },
    });
    const magnetometerSubscription = magnetometer.subscribe({
      next({ x, y, z, timestamp }) {
        setMagnetometerState({ x, y, z, timestamp });
      },
    });
    const barometerSubscription = barometer.subscribe({
      next({ pressure, timestamp }) {
        setBarometerState({ pressure, timestamp });
      },
    });

    return () => {
      accelerometerSubscription.unsubscribe();
      gyroscopeSubscription.unsubscribe();
      magnetometerSubscription.unsubscribe();
      barometerSubscription.unsubscribe();
    };
  }, []);

  return {
    accelerometerState,
    gyroscopeState,
    magnetometerState,
    barometerState,
  };
};

export default useSensors;
