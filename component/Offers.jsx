import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, Dimensions } from 'react-native';
import Trophy from '../assets/svg/Trophy.js';
import Flame from '../assets/svg/Flame.js';
import Heart from '../assets/svg/Heart.js';
import Star from '../assets/svg/Star.js';
import { theme } from '../theme.js';

const { width, height } = Dimensions.get('window');

// Define your offer data in a JSON object
const offerData = [
  {
    image: require('../assets/9c17eb9d626c7a2a944c8a7c8af8b458.jpeg'),
    name: 'Chicken Republic',
    price: '₦3,500',
    discount: '10% Off',
    rating: '4.6'
  },
  {
    image: require('../assets/cf155f8cf1d6b4c05e68fe7646a1c4cd.jpeg'), // Change the image source as needed
    name: 'Another Restaurant',
    price: '₦4,000',
    discount: '15% Off',
    rating: '4.8'
  },
  {
    image: require('../assets/9bb583b75c1618a8363fee340d1f3d79.jpeg'), // Change the image source as needed
    name: 'Another Restaurant',
    price: '₦4,000',
    discount: '15% Off',
    rating: '4.8'
  },
  {
    image: require('../assets/f255cceb28f7c7132ccf357687e74001.jpeg'), // Change the image source as needed
    name: 'Another Restaurant',
    price: '₦4,000',
    discount: '15% Off',
    rating: '4.8'
  },
  // Add more offer objects as needed
];

export default function Offer() {
  return (
    <View style={styles.offer}>
      {offerData.map((offer, index) => (
        <View style={styles.offerContainer} key={index}>
          <View style={styles.offerImageContainer}>
            <ImageBackground style={styles.offerImage} source={offer.image}>
              <View style={styles.offerImageContent}>
                <View style={styles.offerRating}>
                  <View style={styles.offerRatingRight}>
                    <View style={styles.offerRatingHighlight}>
                      <Trophy style={styles.offerIcon} />
                      <Text style={styles.offerIconText}>{offer.discount}</Text>
                    </View>
                    <View style={styles.offerRatingHighlight}>
                      <Flame />
                      <Text style={styles.offerIconText}>{offer.rating}</Text>
                    </View>
                  </View>
                  <View style={styles.offerRatingHighlight}>
                    <Heart color='#ffffff' />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.offerDetails}>
            <View style={styles.offerDetailsContent}>
              <Text style={styles.contentText}>{offer.name}</Text>
              <Star />
            </View>
            <Text style={styles.offerPrice}>{offer.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  offer: {
    marginTop: 20,
    gap: 30
  },
  offerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -4, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  offerImageContainer: {
    height: height / 7,
  },
  offerImage: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  },
  offerImageContent: {
    flex: 1,
  },
  offerRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start ',
    padding: 10,
    backgroundColor: '#00000012',
    flex: 1,
  },
  offerRatingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  offerRatingHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F680',
    borderRadius: 100,
    padding: 7,
    gap: 3
  },
  offerIconText: {
    fontFamily: theme.font.minimal
  },
  offerIcon: {
    fontSize: 1
  },
  offerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  offerDetailsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  contentText: {
    fontFamily: theme.font.minimal
  },
  offerPrice: {
    fontFamily: theme.font.minimal
  }
});
