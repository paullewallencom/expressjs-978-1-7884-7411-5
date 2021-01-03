'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Job Schema
 */
var JobSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please fill in title',
    trim: true
  },
  company: {
    type: String,
    default: '',
    required: 'Please fill in company',
    trim: true
  },
  job_type: {
    type: String,
    required: 'Please fill in type',
    trim: true
  },
  location: {
    type: String,
    default: '',
    required: 'Please fill in location',
    trim: true
  },
  how_to_apply: {
    type: String,
    default: 'website',
    trim: true
  },
  contact_email: {
    type: String,
    trim: true
  },
  contact_website: {
    type: String,
    trim: true
  },
  contact_phone: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  job_description: {
    type: String,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Job', JobSchema);
