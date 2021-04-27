import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

export default class PetrolDipPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petrolHeight: null,
      petrolLiter: 'Total',
      color: false,
      
    };
  }
  petrolDipQuantityArray = [
    0,
    9.36,
    26.43,
    48.48,
    74.52,
    103.99,
    136.49,
    171.73,
    209.49,
    249.59,
    291.87,
    336.2,
    382.48,
    430.6,
    480.47,
    532.02,
    585.17,
    639.86,
    696.03,
    753.63,
    812.6,
    872.9,
    934.47,
    997.29,
    1061.3,
    1126.48,
    1192.78,
    1260.18,
    1328.64,
    1398.14,
    1468.63,
    1540.1,
    1612.51,
    1685.85,
    1760.09,
    1835.2,
    1911.15,
    1987.94,
    2065.53,
    2143.91,
    2223.06,
    2302.95,
    2383.56,
    2464.89,
    2546.9,
    2629.58,
    2712.92,
    2796.9,
    2881.5,
    2966.71,
    3052.5,
    3138.87,
    3225.79,
    3313.26,
    3401.26,
    3489.78,
    3578.79,
    3668.29,
    3758.27,
    3848.7,
    3939.59,
    4030.9,
    4122.64,
    4214.79,
    4307.33,
    4400.25,
    4493.55,
    4587.21,
    4681.21,
    4775.55,
    4870.21,
    4965.19,
    5060.47,
    5156.03,
    5251.88,
    5347.99,
    5444.36,
    5540.98,
    5637.83,
    5734.9,
    5832.19,
    5929.68,
    6027.37,
    6125.23,
    6223.27,
    6321.47,
    6419.82,
    6518.31,
    6616.93,
    6715.67,
    6814.52,
    6913.47,
    7012.51,
    7111.63,
    7210.82,
    7310.06,
    7409.36,
    7508.7,
    7608.07,
    7707.46,
    7806.86,
    7906.26,
    8005.64,
    8105.01,
    8204.35,
    8303.65,
    8402.9,
    8502.09,
    8601.21,
    8700.25,
    8799.2,
    8898.05,
    8996.79,
    9095.41,
    9193.9,
    9292.25,
    9390.45,
    9488.48,
    9586.35,
    9684.03,
    9781.52,
    9878.81,
    9975.89,
    10072.7,
    10169.4,
    10265.7,
    10361.8,
    10457.7,
    10553.3,
    10648.5,
    10743.5,
    10838.2,
    10932.5,
    11026.5,
    11120.2,
    11213.5,
    11306.4,
    11398.9,
    11491.1,
    11582.8,
    11674.1,
    11765,
    11855.5,
    11945.4,
    12034.9,
    12123.9,
    12212.5,
    12300.5,
    12387.9,
    12474.9,
    12561.2,
    12647,
    12732.21,
    12816.81,
    12900.79,
    12984.13,
    13066.82,
    13148.83,
    13230.15,
    13310.77,
    13390.66,
    13469.8,
    13548.18,
    13625.77,
    13702.56,
    13778.52,
    13853.63,
    13927.86,
    14001.2,
    14073.62,
    14145.09,
    14215.58,
    14285.07,
    14353.53,
    14420.93,
    14487.24,
    14552.41,
    14616.43,
    14679.24,
    14740.82,
    14801.11,
    14860.08,
    14917.68,
    14973.85,
    15028.55,
    15081.7,
    15133.25,
    15183.12,
    15231.24,
    0,
    0, // this value is not aviable so it always generate wrong value.
    15364.1,
    15404.2,
    15442,
    15477.2,
    15509.7,
    15539.2,
    15565.2,
    15587.3,
    15604.4,
    15613.7,
  ];

  desialDipQuantityArray = [
    0,
    12.65,
    35.73,
    65.55,
    100.76,
    140.6,
    184.54,
    232.2,
    283.25,
    337.47,
    394.64,
    454.58,
    517.15,
    582.21,
    649.65,
    719.35,
    791.22,
    865.17,
    941.12,
    1018.99,
    1098.73,
    1180.25,
    1263.51,
    1348.44,
    1435,
    1523.13,
    1612.78,
    1703.91,
    1796.48,
    1890.44,
    1985.75,
    2082.39,
    2180.3,
    2279.46,
    2379.84,
    2481.39,
    2584.1,
    2687.92,
    2792.84,
    2898.81,
    3005.82,
    3113.84,
    3222.85,
    3332.8,
    3443.7,
    3555.5,
    3668.18,
    3781.73,
    3896.11,
    4011.32,
    4127.32,
    4244.1,
    4361.63,
    4479.9,
    4598.89,
    4718.57,
    4838.93,
    4959.95,
    5081.6,
    5203.88,
    5326.77,
    5450.24,
    5574.27,
    5698.87,
    5823.99,
    5949.64,
    6075.79,
    6202.42,
    6329.52,
    6457.08,
    6585.08,
    6713.42,
    6842.32,
    6971.54,
    7101.13,
    7231.09,
    7361.39,
    7492.03,
    7622.98,
    7754.24,
    7885.78,
    8017.6,
    8149.68,
    8282,
    8414.56,
    8547.34,
    8680.32,
    8813.49,
    8946.83,
    9080.34,
    9213.99,
    9347.79,
    9481.7,
    9615.72,
    9749.84,
    9884.03,
    10018.3,
    10152.6,
    10287,
    10421.4,
    10555.8,
    10690.2,
    10824.5,
    10958.9,
    11093.2,
    11227.5,
    11361.7,
    11495.8,
    11629.8,
    11763.7,
    11897.5,
    12031.2,
    12164.7,
    12298,
    12431.2,
    12564.2,
    12696.9,
    12829.5,
    12961.8,
    13093.9,
    13225.7,
    13357.3,
    13488.5,
    13619.5,
    13750.1,
    13880.4,
    14010.4,
    14140,
    14269.2,
    14398,
    14526.4,
    14654.4,
    14782,
    14909.1,
    15035.7,
    15161.9,
    15287.5,
    15412.6,
    15537.2,
    15661.3,
    15784.7,
    15907.6,
    16029.9,
    16151.6,
    16272.6,
    16392.9,
    16512.6,
    16631.6,
    16749.9,
    16867.4,
    16984.2,
    17100.2,
    17215.39,
    17329.78,
    17443.32,
    17556.01,
    17667.81,
    17778.7,
    17888.66,
    17997.66,
    18105.68,
    18212.69,
    18318.67,
    18423.58,
    18527.41,
    18630.11,
    18731.67,
    18832.04,
    18931.2,
    19029.12,
    19125.75,
    19221.07,
    19315.03,
    19407.59,
    19498.72,
    19588.38,
    19676.5,
    19763.06,
    19847.99,
    19931.25,
    20012.78,
    20092.51,
    20170.39,
    20246.34,
    20320.29,
    20392.16,
    20461.85,
    20529.29,
    20594.35,
    0,
    20716.9,
    20774,
    20828.3,
    20879.3,
    20927,
    20970.9,
    21010.7,
    21046,
    21075.8,
    21098.9,
    21111.5,
  ];

  SetpetrolDipVale = value => {
    this.setState({
      petrolHeight: value,
    });
  };

  PertorlValCal = () => {
    let realnum = Math.floor(this.state.petrolHeight);
    let decimalVal = (this.state.petrolHeight - realnum).toFixed(1);
    let calculateRealValueprice = this.petrolDipQuantityArray[realnum];
    let calculateDecimalValueprice =
      ((this.petrolDipQuantityArray[realnum + 1] -
        this.petrolDipQuantityArray[realnum]) /
        10) *
      (decimalVal * 10);
    let totalCalculateVal =
      calculateDecimalValueprice + calculateRealValueprice;

    this.setState({
      petrolLiter: totalCalculateVal,
      color: false,
    });
  };
  DesialValCal = () => {
    let realnum = Math.floor(this.state.petrolHeight);
    let decimalVal = (this.state.petrolHeight - realnum).toFixed(1);
    let calculateRealValueprice = this.desialDipQuantityArray[realnum];
    let calculateDecimalValueprice =
      ((this.desialDipQuantityArray[realnum + 1] -
        this.desialDipQuantityArray[realnum]) /
        10) *
      (decimalVal * 10);
    let totalCalculateVal =
      calculateDecimalValueprice + calculateRealValueprice;

    this.setState({
      petrolLiter: totalCalculateVal,
      color: true,
    });
  };

  render() {
    return (
      <View style={this.styles.ConvertLengthToLiter}>
        <View style={this.styles.logoViewStyle}>
          <Image
            source={require('../src/Assets/BPLogo.png')}
            style={this.styles.logoImageStyle}
          />
          <Text style={this.styles.titleStyle}> Sainik Filling Station</Text>
        </View>
        {/* <View style={this.styles.titleViewStyle}>
          <Text style={this.styles.titleStyle}> Sainik Filling Station</Text>
        </View> */}
        <View>
          <TextInput
            placeholder="Enter Dip Value"
            placeholderTextColor="white"
            blurOnSubmit={true}
            fontSize={23}
            selectionColor="green"
            onChangeText={value => this.SetpetrolDipVale(value)}
            value={this.state.petrolHeight}
            style={this.styles.textInputStyle}
            keyboardType="numeric"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={this.PertorlValCal}
            style={this.styles.petrolButtonStyle}>
            <Text style={this.styles.textTouchableStyle}>Petrol</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.DesialValCal}
            style={this.styles.dieselButtonStyle}>
            <Text style={this.styles.textTouchableStyle}>Diesel</Text>
          </TouchableOpacity>

          <View style={this.state.color?this.styles.resultViewPetrolStyle:this.styles.resultViewDeiselStyle}>
            <Text
              style={this.styles.resultViewTextStyle}>
              {this.state.petrolLiter}
            </Text>
          </View>
        </View>
        {/* <View>
          <TouchableOpacity
            // onPress={() =>
            //   Linking.openURL('https://gyandham.wordpress.com/about-me/')
            // }
            >
            <Text style={this.styles.contactTextStyle}>
              ____________________
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }

  styles = StyleSheet.create({
    ConvertLengthToLiter: {
      backgroundColor: '#92D293',
      flex: 1,
    },
    contactTextStyle: {
      //color: 'white',
      fontSize: 24,
      justifyContent: 'center',
      alignSelf:'center',
      margin: 24,
    },
    resultViewTextStyle: {
      color: 'white',
      fontSize: 45,
      margin: 10,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    resultViewPetrolStyle: {
      width: "70%",
      height: 100,
      borderRadius: 80,
      borderWidth: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#DDD101',
      marginBottom:100,
    },
    resultViewDeiselStyle: {
      width: "70%",
      height: 100,
      borderRadius: 80,
      borderWidth: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor:'#3DBE29',
      marginBottom:100,
    },
    textTouchableStyle: {
      fontSize: 25,
      justifyContent: 'center',
      margin: 24,
      width: 80,
    },
    textInputStyle: {
      color: 'white',
      borderRadius: 60,
      width: 340,
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: '#1B98F5',
    },
    titleViewStyle: {
      borderWidth: 5,
      width: 335,
      alignSelf: 'center',
      borderColor: 'red',
      borderRadius: 40,
      marginTop: 10,
      marginBottom: 20,
    },
    titleStyle: {
      color: 'white',
      fontSize: 28,
      margin: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: -25,
    },
    petrolButtonStyle: {
      alignItems: 'center',
      backgroundColor: '#3DBE29',
      width: 130,
      height: 100,
      left: 10,
      borderRadius: 26,
      top: 40,
    },
    dieselButtonStyle: {
      alignItems: 'center',
      backgroundColor: '#DDD101',
      width: 130,
      height: 100,
      borderRadius: 25,
      left: 250,
      bottom: 60,
    },
    logoImageStyle: {
      alignSelf: 'center',
      width: 220,
      height: 250,
    },
    logoViewStyle: {
      alignSelf: 'center',
      width: 330,
      height: 300,
      borderColor: 'red',
      borderWidth: 3,
      borderRadius: 70,
      margin: 20,
    },
  });
}
