 function Item({ name, isPacked }) {
   return (
    <div>
   <li className="item"><del>{name}</del></li>
   </div>
   );
 }


export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Laptop"
        />
        <Item
          isPacked={false}
          name="Chargers"
        />
        <Item
          isPacked={false}
          name="Socks"
        />
      </ul>
    </section>
  );
}
