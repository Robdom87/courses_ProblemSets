import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")

# Make sure API key is set
if not os.environ.get("API_KEY"):
    raise RuntimeError("API_KEY not set")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
@login_required
def index():
    """Show portfolio of stocks"""
    return apology("TODO")

@app.route("/buy", methods=["GET", "POST"])
# @login_required
def buy():
    """Buy shares of stock"""
    return apology("TODO")
    # TO DO
    # include all appropriate elements

@app.route("/history")
@login_required
def history():
    """Show history of transactions"""
    return apology("TODO")

@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
# @login_required
def quote():
    """Get stock quote."""

    #when from submitted
    if request.method == "POST":
     # input stock symbol
     # submit input put to /quote
     # add quote and quoted html one if for after the user input
     #if successful log user in
        return apology("TODO")
    #display registration form
    else:
        return render_template("register.html")




@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    #when from submitted
    if request.method == "POST":
    #  add username if blank or already in system return apology
    # Ensure username was submitted
        user = request.form.get("username")
        passw = request.form.get("password")
        confirm = request.form.get("confirmation")

        if not user:
            return apology("must provide username")
        # Ensure password was submitted
        elif not passw:
            return apology("must provide password")
        elif not confirm:
            return apology("must retype password")

        #ensure pass and confirm match
        if passw != confirm:
            return apology("passwords must match")

        hashPass = generate_password_hash(passw)

        #insert users in database and  hash their passwords when inserting them
        # Executing the SQL command
        try:
            db.execute("INSERT INTO users (username, hash) VALUES (?, ?)", user, hashPass)
            return redirect('/')
        except:
            return apology("username already present")
    #display registration form
    else:
        return render_template("register.html")

@app.route("/sell", methods=["GET", "POST"])
# @login_required
def sell():
    """Sell shares of stock"""
    return apology("TODO")
