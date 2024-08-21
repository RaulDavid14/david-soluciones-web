from datetime import datetime

def get_year(request):
    return {'year': datetime.now().strftime("%Y")}

def get_date(request):
    date = datetime.now()
    return {'date' : date.strftime("%d-%m-%Y")}
