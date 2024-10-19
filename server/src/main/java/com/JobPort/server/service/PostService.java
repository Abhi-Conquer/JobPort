package com.JobPort.server.service;

import com.JobPort.server.dao.PostDao;
import com.JobPort.server.dto.PostDTO;
import com.JobPort.server.model.PostModel;

import java.util.List;

public interface PostService {

    public PostModel savePost(PostDTO postDTO);

    public List<PostModel> getAllPosts();
}













//
//package com.indeed.server.service;
//
//import com.indeed.server.dto.PostDTO;
//import com.indeed.server.model.PostModal;
//
//import java.util.List;
//
//public interface PostService {
//
//    public List<PostModal> getAllPosts();
//
//    public PostModal savePost(PostDTO post);
//}