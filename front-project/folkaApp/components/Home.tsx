import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Calendar} from 'react-native-calendars';
import Day from 'react-native-calendars/src/calendar/day';

const Home = ({navigation, route}) => {
//   const [user, setUser] = useState('Mari Pili');

  const onDayClick = (day, month, year) => {
    console.log('day selected is: ', day, month, year);
  };

  return (
    <View style={styles.sectionContainer}>
      <View>
        <Text style={styles.colorPink}>Hola, {route.params.user}</Text>
      </View>
      <View>
        <Calendar
            onDayPressed= {(day, month, year) => {onDayClick(day, month, year)}}
            theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#CDFADB',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#FF8080',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#FF8080',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#FF8080',
            selectedDotColor: '#ffffff',
            arrowColor: '#FF8080',
            monthTextColor: '#FF8080',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 32,
    paddingHorizontal: 56,
    backgroundColor: '#CDFADB',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  colorAqua: {
    color: '#CDFADB',
  },
  colorGreen: {
    color: '#F6FDC3',
  },
  colorOrange: {
    color: '#FFCF96',
  },
  colorPink: {
    margin: 28,
    color: '#FF8080',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
