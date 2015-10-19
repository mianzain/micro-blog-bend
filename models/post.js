var mongoose = require("mongoose");
var schema = mongoose.Schema;
var PostSchema =new schema ({
	name:String,
	desc: String,
	complete: Boolean

});
var Post = mongoose.model('Post', PostSchema);
module.exports = Post;