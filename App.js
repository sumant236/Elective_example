import { FlatList, ScrollView, View } from "react-native";
import Header from "./src/components/Header";
import { useEffect, useState } from "react";
import Card from "./src/components/Card";
import axios from "axios";
import AddUser from "./src/components/AddUser";

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      first_name: "Pankaj",
      last_name: "Phogat",
      email: "pankajphogat@gmail.com",
    },
    {
      id: 2,
      first_name: "Sumant",
      last_name: "Singh",
      email: "sumantsingh236@gmail.com",
    },
  ]);

  const fetchUsers = () => {
    setLoading(true);
    return axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setData(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleSubmit = (text) => {
    // Post Request
    const fullName = text.trim().split(" ");
    var lastIndex = text.trim().lastIndexOf(" ");
    const payload = {
      id: data.length + 1,
      first_name: text.substring(0, lastIndex),
      last_name: fullName[fullName.length - 1],
      email: `${fullName.join("")}@gmail.com`,
    };
    setData([...data, payload]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <ScrollView>
      <Header title="My First App" />
      <View>
        <AddUser onSubmit={handleSubmit} />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card {...item} />}
        />
      </View>
    </ScrollView>
  );
}
