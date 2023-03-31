const [name, setName] = useState("");
const [online, setOnline] = useState("");
const [scroll, setScroll] = useState(window.scroll);

//useEffect type-1 => Selalu dipanggil saat render
useEffect(() => {
// console.log("Always re-rendered");
});

//useEffect type-2
useEffect(() => {
console.log(
"Appeared when any components ready to use or some state were changed"
);
}, []);

//useEffect type-3
useEffect(() => {
console.log("Rendered at first and when some state were changed");
}, [online]);

function updateScroll() {
const windoPos = window.scrollY;
console.log(`Window position is at ${windoPos}`);
setScroll(windoPos);
}

//useEffect type-4 -> useEffect clean up
useEffect(() => {
console.log("Scroll Starts");
window.addEventListener("scroll", updateScroll);
}, []); //[] to reset to its default value

return (

<div className="h-[4000px]">
<Card>
<Card.Title>UseRef</Card.Title>
<Card.Body>
<Input value={name} onChange={(e) => setName(e.target.value)} />
<Button
onClick={() => setOnline((online) => !online)}
className="bg-black text-white" >
Set Online
</Button>
</Card.Body>
<Card.Footer>
{name} is {online ? "online" : "offline"}
</Card.Footer>
</Card>
</div>
