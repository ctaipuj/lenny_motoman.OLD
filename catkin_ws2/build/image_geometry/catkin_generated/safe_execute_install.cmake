execute_process(COMMAND "/home/ctai/catkin_ws2/build/image_geometry/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/ctai/catkin_ws2/build/image_geometry/catkin_generated/python_distutils_install.sh) returned error code ")
endif()