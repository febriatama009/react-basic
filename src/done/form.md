 <Card>
        <Card.Title>Sign Up For Account</Card.Title>

        <form onSubmit={submit}>
          <Card.Body>
            <div className="p-2 m-4 border rounded-lg border-slate-300 shadow-sm">
              <p className="m-3 text-sm">
                Your name is : <b>{form.name || "----"}</b>
              </p>
              <p className="m-3 text-sm">
                Your Email is : <b>{form.email || "----"}</b>
              </p>
            </div>

            <div className="mb-6 flex flex-col">
              <Label htmlFor="name" value={"Name"} />
              <Input
                value={form.name}
                id="name"
                name="name"
                onChange={onChange}
              />
            </div>

            <div className="mb-6 flex flex-col">
              <Label htmlFor="email" value={"Email"} />
              <Input
                value={form.email}
                id="email"
                name="email"
                onChange={onChange}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <Button className="bg-black" type={"submit"}>
              <BrandGithub />
              Register Now
            </Button>
          </Card.Footer>
        </form>
      </Card>

const [form, setForm] = useState({
name: "",
email: "",
});

function onChange(e) {
setForm({ ...form, [e.target.name]: e.target.value });
}

function submit(e) {
e.preventDefault();
console.log(form);
}
