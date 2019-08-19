const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
	pack_code: {
		type: 'String'
	},
	pack_name: {
		type: 'String'
	},
	type_code: {
		type: 'String'
	},
	type_name: {
		type: 'String'
	},
	faction_code: {
		type: 'String'
	},
	faction_name: {
		type: 'String'
	},
	encounter_code: {
		type: 'String'
	},
	encounter_name: {
		type: 'String'
	},
	position: {
		type: 'Number'
	},
	exceptional: {
		type: 'Boolean'
	},
	encounter_position: {
		type: 'Number'
	},
	code: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	real_name: {
		type: 'String'
	},
	text: {
		type: 'String'
	},
	real_text: {
		type: 'String'
	},
	quantity: {
		type: 'Number'
	},
	clues_fixed: {
		type: 'Boolean'
	},
	health: {
		type: 'Number'
	},
	health_per_investigator: {
		type: 'Boolean'
	},
	enemy_damage: {
		type: 'Number'
	},
	enemy_horror: {
		type: 'Number'
	},
	enemy_fight: {
		type: 'Number'
	},
	enemy_evade: {
		type: 'Number'
	},
	victory: {
		type: 'Number'
	},
	traits: {
		type: 'String'
	},
	real_traits: {
		type: 'String'
	},
	flavor: {
		type: 'String'
	},
	illustrator: {
		type: 'String'
	},
	is_unique: {
		type: 'Boolean'
	},
	exile: {
		type: 'Boolean'
	},
	hidden: {
		type: 'Boolean'
	},
	permanent: {
		type: 'Boolean'
	},
	double_sided: {
		type: 'Boolean'
	},
	octgn_id: {
		type: 'String'
	},
	url: {
		type: 'String'
	},
	imagesrc: {
		type: 'String'
	},
	spoiler: {
		type: 'Number'
	},
	backimagesrc: {
		type: 'String'
	}
}, {
    timestamps: false
  });

module.exports = mongoose.model('Card', CardSchema);
