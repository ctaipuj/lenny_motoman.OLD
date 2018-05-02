// Auto-generated. Do not edit!

// (in-package industrial_extrinsic_cal.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class robot_joint_values_triggerGoal {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.joint_values = null;
    }
    else {
      if (initObj.hasOwnProperty('joint_values')) {
        this.joint_values = initObj.joint_values
      }
      else {
        this.joint_values = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type robot_joint_values_triggerGoal
    // Serialize message field [joint_values]
    bufferOffset = _arraySerializer.float64(obj.joint_values, buffer, bufferOffset, null);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type robot_joint_values_triggerGoal
    let len;
    let data = new robot_joint_values_triggerGoal(null);
    // Deserialize message field [joint_values]
    data.joint_values = _arrayDeserializer.float64(buffer, bufferOffset, null)
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += 8 * object.joint_values.length;
    return length + 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'industrial_extrinsic_cal/robot_joint_values_triggerGoal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b79b974a6ae3f399e6d798ff6613e367';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # Define the goal
    float64[] joint_values
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new robot_joint_values_triggerGoal(null);
    if (msg.joint_values !== undefined) {
      resolved.joint_values = msg.joint_values;
    }
    else {
      resolved.joint_values = []
    }

    return resolved;
    }
};

module.exports = robot_joint_values_triggerGoal;