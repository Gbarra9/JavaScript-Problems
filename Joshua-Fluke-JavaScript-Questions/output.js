// What is the output?

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;
// reassigned  value so undefined 
console.log(stoleSecretIdentity());
// accesses hero object and gets value of getSecretIdentity
console.log(hero.getSecretIdentity());

// add hero.getSecretIdentity.bind(hero) to return value twice

// hero.getSecretIdentity.bind(hero)