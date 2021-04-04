import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const initJokes = ()=>{
    return ([{'id':37,'type':'general','setup':'Why did the mushroom get invited to the party?','punchline':'Because he was a fungi.','isFavourite': false},
    {'id':182,'type':'general','setup':'What did the dog say to the two trees?','punchline':'Bark bark.','isFavourite': false},
    {'id':341,'type':'general','setup':'Why did the house go to the doctor?','punchline':'It was having window panes.','isFavourite': false},
    {'id':49,'type':'general','setup':'Why do chicken coops only have two doors?','punchline':'Because if they had four, they would be chicken sedans','isFavourite': false},
    {'id':202,'type':'general','setup':'What do you call a bear with no teeth?','punchline':'A gummy bear!','isFavourite': false},
    {'id':237,'type':'general','setup':'What do you call two barracuda fish?','punchline':' A Pairacuda!','isFavourite': false},
    {'id':213,'type':'general','setup':'What do you call a droid that takes the long way around?','punchline':'R2 detour.','isFavourite': false},
    {'id':229,'type':'general','setup':'What do you call an alligator in a vest?','punchline':'An in-vest-igator!','isFavourite': false},
    {'id':262,'type':'general','setup':'What is the tallest building in the world?','punchline':'The library, it’s got the most stories!','isFavourite': false},
    {'id':140,'type':'general','setup':'How many bones are in the human hand?','punchline':'A handful of them.','isFavourite': false}]);
};

const setAsFavourite = (joke)=>{
    console.log(joke);
};
const unsetFavourite = (joke)=>{
    console.log(joke);
};

const RandomJokes = ()=>{
    const [jokes, setJokes] = useState(initJokes);
    console.log(jokes);
//    setJokes();

    return (<View>
        <View>
            {jokes.map((joke,index)=>{
                return <Card key={index}>
                    <Text style={{color: 'red'}}>{joke.setup}</Text>
                    <Text>{joke.punchline}</Text>
                    { !joke.isFavourite && (<Icon
  name="favorite-border" onPress={()=>setAsFavourite(joke)} />)}
                    { joke.isFavourite && (<Icon name="favorite" type="MaterialIcons" size={25} onPress={()=>unsetFavourite(joke)} />)}
                    </Card>;
            })}
        </View>
    </View>);

};
export default RandomJokes;
