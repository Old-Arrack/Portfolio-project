from flask import Flask, render_template, request, redirect, url_for
from send_mail import SendMail

app = Flask(__name__)
app.config["SECRET_KEY"] = "esIVJKksdkj"


@app.route("/")
def home():
    msg_status = request.args.get("msg_status")
    return render_template("index.html", goto=msg_status)


@app.route("/sendmsg", methods=["POST"])
def send_msg():
    name = request.form["name"].strip()
    email = request.form["email"].strip()
    msg = request.form["msg"].strip()

    send_mail = SendMail(name, email, msg)
    send_mail.send_msg()

    return redirect(url_for("home", msg_status=True))


if __name__ == "__main__":
    app.run(debug=True)
