package com.JobPort.server.service;

import com.JobPort.server.dao.PostDao;
import com.JobPort.server.dto.PostDTO;
import com.JobPort.server.model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostDao postDao;


    @Override
    public PostModel savePost(PostDTO postDTO) {
        PostModel postModel = new PostModel();

        postModel.setProfile(postDTO.getProfile());
        postModel.setType(postDTO.getType());
        postModel.setDescription(postDTO.getDescription());
        postModel.setExperience(postDTO.getExperience());
        postModel.setTechnology(postDTO.getTechnology());
        postModel.setSalary(postDTO.getSalary());

        return postDao.save(postModel);

    }

    @Override
    public List<PostModel> getAllPosts() {
        return postDao.findAll();
    }
}
