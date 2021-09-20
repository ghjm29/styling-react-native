import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, SectionList, StyleSheet} from 'react-native';

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';


export const HomeScreen = ({navigation})=>{

	function interactionHandler(item) {
		console.log("handling interaction");
		navigation.navigate("Details", {item})
	}

    return (
        <View style={styles.container}>
			<View style={styles.homebody}>
				<ScrollView>
                	<SectionList
	                    sections={defaultState} 
						renderItem={({item}) => (						
							<ConcertListItem item={item} navigation={navigation} handleInteraction={interactionHandler}/> 						
						)}
                  		renderSectionHeader={({section}) => (
                      		<Text style={styles.sectionHeader}>
                        		{section.title}
                      		</Text>
					)}/>
            	</ScrollView>  
			</View> 	
			<View style={styles.homefooter}>   
				<Text style={styles.homefooterText}>
					(C)2020 Globoticket
				</Text>
			</View>
	</View>

	)
	
}

const styles = StyleSheet.create({
	container:{
		backgroundColor: "white",
		// height: 470
		flex: 1
	},
	homebody:{
		flex: 15
	},
	homefooter:{
		flex: 1,
		alignSelf: "stretch",
		borderTopColor: "gray",
		borderTopWidth: StyleSheet.hairlineWidth,
		backgroundColor: "steelblue",
		justifyContent: "flex-end"
	},
	homefooterText:{
		fontSize: "2vh",
		textAlign: "center",
		color: "white",
		marginBottom: "0.5vh"
	},
	sectionHeader:{
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontWeight: "bold",
		backgroundColor: 'rgba(247, 247, 247)',
		borderBottomColor: "steelblue",
		borderBottomWidth: StyleSheet.hairlineWidth,
		fontSize: "2.5vh"
	}
})