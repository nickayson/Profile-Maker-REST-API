# Nicholas Ayson
# Brandon Amezcua

import json
from flask import Flask, request, jsonify
import werkzeug

app = Flask(__name__)

data = {
    "name": "Nicholas Ayson",
    "Email": "nick.ayson7@gmail.com"
}


# will return the Profile with the name given (set to Nick for now)
@app.route('/', methods=['GET'])
def query_profile():
    name = request.args.get('name')
    # name = "Nick"
    print(name)
    with open('data.txt', 'r') as f:
        data = f.read()
        profiles = json.loads(data)
        for profile in profiles:
            if profile[1] == name:
                return jsonify(profile)
        return jsonify({'error': 'data not found'})

# Will create a new profile and return jsonifyed to the local host screen
@app.route('/put', methods=['PUT'])
def create_profile():
    profile = json.loads(request.data)
    with open('data.txt', 'r') as f:
        data = f.read()
    if not data:
        profiles = [profile]
    else:
        profiles = json.loads(data)
        profiles.append(profile)
    with open('data.txt', 'w') as f:
        f.write(json.dumps(profiles, indent=2))
    return jsonify(profile)

# Will update the profile and return jsonifyed to the local host screen
@app.route('/post', methods=['POST'])
def update_profile():
    profile = json.loads(request.data)
    new_profiles = []
    with open('data.txt', 'r') as f:
        data = f.read()
        profiles = json.loads(data)
    for r in profiles:
        if r['name'] == profile['name']:
            r['email'] = profile['email']
        new_profiles.append(r)
    with open('data.txt', 'w') as f:
        f.write(json.dumps(new_profiles, indent=2))
    return jsonify(profile)

# Will delete a profile from text file and return jsonifyed to the local host screen
@app.route('/delete', methods=['DELETE'])
def delte_profile():
    profile = json.loads(request.data)
    new_profiles = []
    with open('data.txt', 'r') as f:
        data = f.read()
        profiles = json.loads(data)
        for r in profiles:
            if r['name'] == profile['name']:
                continue
            new_profiles.append(r)
    with open('data.txt', 'w') as f:
        f.write(json.dumps(new_profiles, indent=2))
    return jsonify(profile)

@app.errorhandler(werkzeug.exceptions.BadRequest)
def handle_bad_request(e):
    return 'bad request!', 40
    
def page_not_found(e):
  return render_template('404.html'), 404
  
app.run(debug=True)