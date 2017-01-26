module.exports = function(app, data) {
    var mysql = app.drivers.mysql;
    
    this.table = 'vote';
    
    this.id=data.id || null;
    this.candidate= data.candidat || null;
    this.voters = data.votant || null;
    
    
    this.get = function(cb) {
        var q = "SELECT * FROM " + this.table;
    
    
        mysql.query(q, function(rows){
            cb(rows);
        });    
    }
    
    
    this.register = function(cb){
        var me = this;
        q = "INSERT INTO " + this.table + " (candidat, votant) VALUES ('"+this.candidate+"','"+this.voters+"')";
    
        mysql.query(q, function(rows){
            me.id = rows.insertID;
            cb(me);
        });
    }
    
    return this;
    
}


