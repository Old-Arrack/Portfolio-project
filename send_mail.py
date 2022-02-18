import smtplib
import os


class SendMail:
    def __init__(self, name, email, msg):
        self.from_mail = os.environ.get("EMAIL")
        self.password = os.environ.get("PASSWORD")
        self.to_mail = os.environ.get("TOMAIL")
        self.msg = f"Subject: Portfolio Website\n\n" \
                   f"Name: {name}   Email: {email}\n" \
                   f"{msg}"

    def send_msg(self):
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=self.from_mail,
                             password=self.password)
            connection.sendmail(
                from_addr=self.from_mail,
                to_addrs=self.to_mail,
                msg=self.msg
            )
