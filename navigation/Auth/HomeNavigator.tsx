import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FeedScreen } from '../../screens/Home';
import { HomeParamList } from '../../types';

const Drawer = createDrawerNavigator<HomeParamList>();

export default function HomeNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={FeedScreen} />
        </Drawer.Navigator>
    );
}