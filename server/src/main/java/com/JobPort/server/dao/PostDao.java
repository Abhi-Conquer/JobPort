package com.JobPort.server.dao;

import com.JobPort.server.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDao extends MongoRepository<PostModel, String> {

}

//
//package com.indeed.server.dao;
//
//import com.indeed.server.model.PostModal;
//import org.springframework.data.mongodb.repository.MongoRepository;
//
//public interface PostDao extends MongoRepository<PostModal, String> {
//}
