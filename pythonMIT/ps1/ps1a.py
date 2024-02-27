#Part A: House Hunting

def months_to_save():
    """
    Returns how many months it will take you to save up enough money for a down payment 
    by calculating from the users annual salary, portion to be saved, cost of home.
    """
    months = 0.0
    annual_salary = float(input("Enter your annual salary: "))
    portion_saved = float(input("Enter the percent of your salary to save, as a decimal: "))

    #1.Call the cost of your dream home total_cost .
    total_cost = float(input("Enter the cost of your dream home: "))
 
    #2.Call the portion of the cost needed for a down payment portion_down_payment . For simplicity, assume that portion_down_payment = 0.25 (25%). 
    portion_down_payment = 0.25

    #3.Call the amount that you have saved thus far current_savings . You start with a current savings of $0. 
    current_savings = 0.0
    #4.Assume that you invest your current savings wisely, with an annual return of r (in other words, at the end of each month, you receive an additional current_savings*r/12 funds to put into your savings – the 12 is because r is an annual rate). Assume that your investments earn a return of r = 0.04 (4%). 
    r = 0.04
    #5.Assume your annual salary is annual_salary . 
    #6.Assume you are going to dedicate a certain amount of your salary each month to saving for the down payment. Call that portion_saved . This variable should be in decimal form (i.e. 0.1 for 10%). 
    down_payment = total_cost * portion_down_payment

    #7.At the end of each month, your savings will be increased by the return on your investment, plus a percentage of your monthly salary (annual salary / 12).
    while current_savings < down_payment:
        months += 1
        current_savings += current_savings*r/12
        current_savings += (annual_salary/12) * portion_saved 

    print("Number of months: ",months)
    return months

months_to_save()

#Test Case 1 >>> 
#Enter your annual salary: 120000 
#Enter the percent of your salary to save, as a decimal: . 10 
#Enter the cost of your dream home: 1000000 
#Number of months: 183 

#Test Case 2 >>> 
#Enter your annual salary: 80000 
#Enter the percent of your salary to save, as a decimal: . 15 
#Enter the cost of your dream home: 500000 
#Number of months: 105#